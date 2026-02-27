# React + Vite: CV Generator Project

Access the project at https://odin-cv-generator-nine.vercel.app/ 

## Summary
A CV generator app built with React. Users can manage multiple work experience entries, edit personal details and education, and see changes reflected live in a formatted CV preview.

## Features

- Add, edit, and delete multiple work experience entries
- Live CV preview that updates as you type
- Conditional fields (end date hidden for current positions)
- Click-to-edit interaction on CV preview

## Technologies Used
- Vite
- React

## What I learnt
Component architecture, lifting state up, controlled vs uncontrolled inputs, event bubbling

## Future improvements
- Styling of the app is rudimentary: improve aesthetics
- Improve UX: currently user has to scroll down to complete entire CV; make it so that only the actively edited CV section has its corresponding form displayed on the left
    - Consider moving 'delete' to the form section, and a click on the CV section automatically selects it for 'edit'. This eliminates the need for two buttons, or to even 'close' the modal. 
- Export to PDF feature with a standardized LaTeX resume format 