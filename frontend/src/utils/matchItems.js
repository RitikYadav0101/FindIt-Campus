function getWords(text = "") {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 2);
}


function getMatchScore(lostItem, foundItem) {
  let score = 0;


  // ================= ITEM NAME =================

  const lostItemName = (
    lostItem.itemName || ""
  ).toLowerCase();

  const foundItemName = (
    foundItem.itemName || ""
  ).toLowerCase();


  if (
    lostItemName &&
    foundItemName &&
    (
      lostItemName.includes(foundItemName) ||
      foundItemName.includes(lostItemName)
    )
  ) {
    score += 40;
  }


  // ================= CATEGORY =================

  if (
    lostItem.category &&
    foundItem.category &&
    lostItem.category.toLowerCase() ===
      foundItem.category.toLowerCase()
  ) {
    score += 20;
  }


  // ================= DESCRIPTION + FEATURES =================

  const lostDescriptionWords = getWords(
    `
      ${lostItem.description || ""}
      ${lostItem.features || ""}
    `
  );


  const foundDescriptionWords = getWords(
    `
      ${foundItem.description || ""}
      ${foundItem.features || ""}
    `
  );


  const commonWords = lostDescriptionWords.filter(
    (word) => foundDescriptionWords.includes(word)
  );


  // Maximum 20 points from common words

  score += Math.min(
    commonWords.length * 5,
    20
  );


  // ================= LOCATION =================

  if (
    lostItem.location &&
    foundItem.location &&
    lostItem.location.trim().toLowerCase() ===
      foundItem.location.trim().toLowerCase()
  ) {
    score += 10;
  }


  // ================= DATE =================

  if (
    lostItem.dateLost &&
    foundItem.dateFound
  ) {
    const lostDate = new Date(lostItem.dateLost);
    const foundDate = new Date(foundItem.dateFound);

    const difference =
      Math.abs(foundDate - lostDate) /
      (1000 * 60 * 60 * 24);


    // Same day

    if (difference === 0) {
      score += 10;
    }

    // Found within 3 days

    else if (difference <= 3) {
      score += 5;
    }
  }


  // ================= MAX SCORE =================

  return Math.min(score, 100);
}



export function findMatches(lostItems, foundItems) {
  const matches = [];


  lostItems.forEach((lostItem) => {

    foundItems.forEach((foundItem) => {

      const score = getMatchScore(
        lostItem,
        foundItem
      );


      // Only meaningful matches

      if (score >= 40) {

        matches.push({
          lostItem,
          foundItem,
          score,
        });

      }

    });

  });


  // Highest score first

  return matches.sort(
    (a, b) => b.score - a.score
  );
}