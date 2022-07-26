import { createGlobalStyle } from "styled-components";

export const RootStyles = createGlobalStyle`
    :root{
        --color-primary: #42b4caff;
        --color-secondary: #bfde42ff;
        --color-tertiary: #193840ff;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --success: #3FE864;
        --negative: #E83F5B;
        --title-1: bold 1rem 'Inter';
        --title-2: bold 1.25rem 'Inter';
        --title-3: bold 1.5rem 'Inter';
        --title-4: bold 2rem 'Inter';
        --helper-text: normal 0.85rem 'Poppins';
        --body-text: normal 0.75rem 'Poppins';

        //WARNING: OVERRIDES TOASTFY DEFAULT COLOR BEHAVIOR
        --toastify-color-dark: var(--grey-2);
        --toastify-color-success: var(--success);
        --toastify-color-error: var(--negative);
    }
`;
