# Engineering College Website

## Project Overview
This is a **static, multi-page brochure website** for Engineering College, built with **HTML5, CSS3, Bootstrap 5, and vanilla JavaScript (ES6+)**.  
The site provides a professional digital presence for the institution and is fully **responsive**, **accessible**, and user-friendly across mobile, tablet, and desktop.

---

## Page Map

| Page | Description |
|------|-------------|
| `index.html` | Home page with hero section, tagline, and main call-to-action |
| `about.html` | Programs overview with tabs for different disciplines |
| `admissions.html` | Admissions process, required documents, tuition table, FAQ accordion |
| `student-life.html` | Gallery carousel of campus life and student activities |
| `contact.html` | Contact form with email validation, dropdown subject, and anti-spam check |
| `registration.html` | Advanced registration form with full client-side validation |

---

## Features Implemented

### Forms
- **Registration Form (Advanced)**  
  - Full Name, Email, Phone, Program, Study Mode, Intended Intake, Password & Confirm Password  
  - Optional Scholarship Interest field  
  - Policy/terms agreement checkbox  
  - Client-side validation with inline error messages  
  - Success feedback on submission  
  - Fully accessible (labels, keyboard navigation)  

- **Contact Form (Basic)**  
  - Name, Email, Subject (dropdown), Message  
  - Anti-spam question  
  - Validation and success/failure feedback  

### Additional Interactivity
1. **Programs Tabs** on About page (Bootstrap tab component)  
2. **FAQ Accordion** on Admissions page (Bootstrap accordion component)  
3. **Student Life Gallery Carousel** with previous/next buttons  

---

## Responsiveness & Accessibility
- Mobile-first design, no horizontal scrolling  
- Fixed top navigation with collapsible menu on small screens  
- Semantic HTML and meaningful headings  
- Text alternatives for images (`alt` attributes)  
- Focus indicators for keyboard navigation  
- Sufficient color contrast for readability  

---

## Known Limitations
- Forms are client-side only; no backend integration  
- Gallery images are placeholders or optimized stock images  
- No real-time database or email submission  

---

## Assets & Credits
- Images from [E|C](https://www.college.edu.kg/) (free, attribution-compliant)  
- Icons from [Bootstrap Icons](https://icons.getbootstrap.com/)  
- Fonts: System fonts and Bootstrap defaults  

---

## Live Demo
[GitHub Pages URL](art1000-7.github.io.)

---

## How to Navigate the Site
- Use the top navigation bar to access all pages  
- Click **Apply Now** to go to the Registration page  
- Explore Programs via the **tabs** on About page  
- Read FAQs via the **accordion** on Admissions page  
- Browse Student Life using the **carousel**  
- Contact the college via the Contact form
