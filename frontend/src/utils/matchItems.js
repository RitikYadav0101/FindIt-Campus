function getWords(text = "") {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 2);
}

function getMatchScore(lostItem, foundItem) {
  let score = 0;

  // ================= ITEM TYPE =================

  const lostItemName = (
    lostItem.itemName ||
    lostItem.category ||
    ""
  ).toLowerCase();

  const foundItemName = (
    foundItem.item || ""
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


  // ================= DESCRIPTION =================

  const lostDescriptionWords = getWords(
    `${lostItem.description || ""} ${lostItem.features || ""}`
  );

  const foundDescriptionWords = getWords(
    foundItem.description || ""
  );

  const commonWords = lostDescriptionWords.filter(
    (word) => foundDescriptionWords.includes(word)
  );

  // Maximum 30 points from description
  score += Math.min(commonWords.length * 10, 30);


  // ================= LOCATION =================

  if (
    lostItem.location &&
    foundItem.location &&
    lostItem.location.toLowerCase() ===
      foundItem.location.toLowerCase()
  ) {
    score += 20;
  }


  // ================= DATE =================

  if (
    lostItem.dateLost &&
    foundItem.date &&
    lostItem.dateLost === foundItem.date
  ) {
    score += 10;
  }


  // Maximum score = 100

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

      // Only show meaningful matches

      if (score >= 40) {
        matches.push({
          lostItem,
          foundItem,
          score,
        });
      }

    });
  });

  // Highest match first

  return matches.sort(
    (a, b) => b.score - a.score
  );
}