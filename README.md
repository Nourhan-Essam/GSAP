# Phase 3: Task 3 - Advanced Web Animations 🚀
### CodeVeda Technologies Internship

This project is part of my journey as a Frontend Developer Intern at **CodeVeda Technologies**. This specific task (Task 3 in Phase 3) focuses on implementing high-performance, interactive web animations using **GSAP (GreenSock Animation Platform)**.

## 🔗 Live Demo
**Check out the live project here:** [https://nourhan-essam.github.io/GSAP/]

---

## 🛠️ Task Requirements & Implementation

### 1. Utilizing Advanced Timelines
- Built a synchronized hero section reveal using `gsap.timeline()`.
- Coordinated multiple elements (Titles, Descriptions, and CTA buttons) to create a seamless entry sequence with professional easing (`power4.out`).

### 2. Scroll-Linked Motion (ScrollTrigger)
- **Advanced Scrubbing:** Integrated GSAP's ScrollTrigger with `scrub: 1.5`, allowing the animation's progress to be directly controlled by the user's scroll behavior.
- **Dynamic 3D Entry:** Cards enter the viewport with a combination of `rotateX`, `rotateY`, and `scale` transforms, providing a high-end "Apple-style" feel.

### 3. Interactive Mouse-Driven Effects
- **Real-time 3D Tilt:** Added event listeners to track mouse coordinates and apply real-time 3D rotations to feature cards.
- **Micro-interactions:** Integrated nested animations where icons inside cards react independently to hover states for better feedback.

### 4. Performance & Accessibility (Core Objectives)
- **Smoothness:** Optimized all animations to use GPU-accelerated properties (`transform`, `opacity`) to maintain a consistent 60fps.
- **User Preference:** Implemented `prefers-reduced-motion` media queries to ensure the site remains accessible to users with motion sensitivities.

## 🚀 Technologies Used
- **HTML5 & CSS3** (Custom 3D Scene Perspective)
- **JavaScript** (ES6+ Logic)
- **GSAP & ScrollTrigger** (Industry-standard animation engine)

---
**Nourhan** | BIS Student & Frontend Developer Intern @ CodeVeda Technologies
