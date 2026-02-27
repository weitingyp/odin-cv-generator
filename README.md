# React + Vite: CV Generator Project

## Summary
Built a CV generator app (The Odin Project syllabus) to practice React. One can add their personal details, multiple position entries, and one education entry. All data can be edited and loaded dynamically. Positions must be selected for active editing.

## Technologies Used
- Vite framework 
- React (components, rendering lists or arrays, state, lifting up state, passing props, event handlers)

## Future improvements
- Styling of the app is rudimentary: improve aesthetics
- Improve UX: currently user has to scroll down to complete entire CV; make it so that only the actively edited CV section has its corresponding form displayed on the left
    - Consider moving 'delete' to the form section, and a click on the CV section automatically selects it for 'edit'. This eliminates the need for two buttons, or to even 'close' the modal. 
- Export to PDF feature with a standardized LaTeX resume format 