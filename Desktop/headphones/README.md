# Responsive Web Design Implementation



## Getting Started

### Prerequisites

1. **Figma Access**
   - Create an account on [Figma](https://figma.com).
   - Open the provided project link and click **"Duplicate to your Drafts"** to access all design details.
   - If you encounter access issues, use the direct Figma file link provided.

2. **Fonts**
   - Ensure the following fonts are installed on your computer:
     - [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)
     - [Spin Cycle OT](<link-to-download-if-provided>)

3. **Development Environment**
   - Ensure you have a text editor like VSCode and Git installed.
   - Clone this repository to your local machine.

```bash
# Clone the repository
git clone <repository-url>
cd <repository-folder>
```

## Design Notes

### Key Requirements

- The web page must be **responsive**, switching to the mobile version when the screen width is **480px or less**.
- **Max width of the content**: 1000px, centered on the page.
- **Hover/Active States**:
  - Links: `#FF6565`
  - Buttons: `opacity: 0.9`

### Styling Details

- Some Figma values are in float. Round them appropriately when implementing styles.

## Usage

### Install Dependencies
No specific dependencies are required for this project. However, if you use tools like `Live Server` for development, ensure they are installed.

### Run Locally

1. Open the project folder in VSCode.
2. Use `Live Server` to preview changes in real-time:
   - Install Live Server from the VSCode extensions marketplace if you haven't already.
   - Right-click `index.html` and select **"Open with Live Server"**.

### Push Changes to Repository

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Implemented responsive design and hover states"

# Push changes
git push origin main
```

## Folder Structure

```plaintext
project-folder/
├── index.html         # Main HTML file
├── styles.css         # CSS styles
├── scripts.js         # JavaScript (if needed)
├── assets/            # Images, fonts, or other assets
└── README.md          # Project documentation
```

## Tips for Implementation

- **Responsive Design**:
  Use media queries in CSS to handle layout changes for screens 480px or less:

  ```css
  @media (max-width: 480px) {
    /* Mobile-specific styles */
  }
  ```

- **Hover States**:
  Define styles for `hover` and `active` states:

  ```css
  a:hover, a:active {
    color: #FF6565;
  }

  button:hover, button:active {
    opacity: 0.9;
  }
  ```

- **Center Content**:
  Use the following CSS to center the content and limit its width:

  ```css
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
  ```

## License
This project is licensed under the MIT License.

---


