# FindIt@Campus

> **Lost Less. Find Faster.**

A privacy-first, role-based **Smart Lost & Found Portal** designed for educational institutions. FindIt@Campus provides a centralized platform where students, faculty, security staff, and administrators can report, search, claim, and recover lost belongings securely and efficiently.

---

## 📖 Overview

Every day, students lose valuable belongings such as umbrellas, wallets, ID cards, chargers, earphones, calculators, keys, water bottles, and important documents. Although many of these items are found by fellow students or campus staff, there is often no centralized system to connect the finder with the rightful owner.

**FindIt@Campus** digitizes the entire Lost & Found process by providing a secure, transparent, and user-friendly platform for reporting, discovering, verifying, and recovering lost items.

---

## ✨ Key Features

### Authentication & Authorization

* Secure user registration and login
* Role-based access control
* JWT Authentication
* Protected APIs

### Lost Item Management

* Report lost items
* Upload item images
* Add detailed descriptions
* Track report status

### Found Item Management

* Report found items
* Upload images
* Specify found location
* Manage item availability

### Smart Search

* Search by category
* Search by location
* Search by colour
* Search by date
* Filter by status

### Secure Claim Workflow

* Submit ownership claims
* Claim verification process
* Privacy-first contact sharing
* Return confirmation

### Notifications

* Possible item match alerts
* Claim status updates
* Return notifications

### Admin Dashboard

* Manage users
* Manage lost & found listings
* Verify claims
* View analytics
* Generate reports

---

## 🚀 Problem Statement

Students and staff frequently lose personal belongings on campus. Recovered items are often kept at the control room or security office, while owners have no easy way to know that their belongings have been found. This leads to unnecessary manual enquiries, poor communication, and many items remaining unclaimed.

FindIt@Campus addresses this problem by providing a centralized web platform that streamlines the complete Lost & Found lifecycle.

---

## 🎯 Objectives

* Digitize the campus Lost & Found process
* Increase the recovery rate of lost belongings
* Reduce manual enquiries
* Ensure secure ownership verification
* Improve communication between the finder and the owner
* Maintain a centralized record of all lost and found items

---

## 👥 User Roles

### Student

* Report lost items
* Report found items
* Search items
* Submit claims
* Track claim status
* Manage profile

### Faculty / Staff

* Report found items
* Search items
* Verify claims (optional)

### Security

* Manage high-value found items
* Verify item handover
* Update return status

### Administrator

* Manage users
* Manage reports
* Verify claims
* View analytics
* Remove fake listings

---

## 🔄 System Workflow

```text
Item Lost
    ↓
User Reports Lost Item
    ↓
Someone Finds the Item
    ↓
Found Item Report Created
    ↓
System Suggests Possible Matches
    ↓
Owner Submits Claim
    ↓
Claim Verification
    ↓
Contact Shared / Meeting Scheduled
    ↓
Item Returned
    ↓
Case Closed
```

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Java
* Spring Boot

### Database

* MySQL
* Hibernate
* Spring Data JPA

### Security

* Spring Security
* JWT Authentication

### Tools

* Git
* GitHub
* Postman
* Maven
* IntelliJ IDEA / VS Code

---

## 🏗 Project Architecture

```text
Client (Browser)
        │
        ▼
REST Controllers
        │
        ▼
Service Layer
        │
        ▼
Repository Layer
        │
        ▼
MySQL Database
```

---

## 📂 Project Structure

```text
findit-campus/

├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── entity/
│   ├── dto/
│   ├── config/
│   ├── security/
│   ├── exception/
│   └── util/
│
├── frontend/
│   ├── assets/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── scripts/
│
├── database/
├── docs/
├── screenshots/
└── README.md
```

---

## 📊 Core Modules

* Authentication
* User Management
* Lost Item Management
* Found Item Management
* Search & Filters
* Claim Management
* Notifications
* Admin Dashboard
* Analytics

---

## 🔒 Security Features

* JWT Authentication
* Password Encryption
* Role-Based Authorization
* Input Validation
* Exception Handling
* Secure Claim Verification
* Privacy-First Contact Sharing

---

## 📈 Future Enhancements

* AI-powered item matching
* Image similarity detection
* QR code-based item verification
* Email notifications
* Mobile application
* Campus ERP integration
* Push notifications

---

## 🤝 Contributing

Contributions, feature suggestions, and improvements are welcome. Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is intended for educational and learning purposes.

---

## 👨‍💻 Author

**Ritik Kumar**

---

## ⭐ Support

If you found this project useful, consider giving it a **Star ⭐** on GitHub.

---

# FindIt@Campus

**Lost Less. Find Faster.**
