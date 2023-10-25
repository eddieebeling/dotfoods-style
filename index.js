const styles = getComputedStyle(document.documentElement);
const colors = {
    /* Brand Primary Variables */
    brandPrimary: styles.getPropertyValue('--color-brand-primary'),
    brandPrimaryLight: styles.getPropertyValue('--color-brand-primary-light'),
    brandPrimaryDark: styles.getPropertyValue('--color-brand-primary-dark)'),
    /* Brand Accent Variables */
    brandAccent: styles.getPropertyValue('--color-brand-accent'),
    brandAccentDark: styles.getPropertyValue('--color-brand-accent-dark'),
    /* Text Colors */
    textWhite: styles.getPropertyValue('--color-text-white'),
    textBlack: styles.getPropertyValue('--color-text-black'),
    textDark: styles.getPropertyValue('--color-text-dark'),
    textGrayBold: styles.getPropertyValue('--color-text-gray-bold'),
    textGray: styles.getPropertyValue('--color-text-gray'),
    textGrayLight: styles.getPropertyValue('--color-text-gray-light'),
    textGrayFaint: styles.getPropertyValue('--color-text-gray-faint)'),
    textBrand: styles.getPropertyValue('--color-brand-primary'),
    textAffirm: styles.getPropertyValue('--color-text-affirm'),
    textAffirmDark: styles.getPropertyValue('--color-text-affirm-dark'),
    textDeclare: styles.getPropertyValue('--color-text-declare'),
    textAvert: styles.getPropertyValue('--color-text-avert'),
    /* Backgrounds */
    bgWhite: styles.getPropertyValue('--color-bg-white'),
    bgBlack: styles.getPropertyValue('--color-bg-black'),
    bgMidnight: styles.getPropertyValue('--color-bg-midnight'),
    bgGrayFaint: styles.getPropertyValue('--color-bg-gray-faint'),
    bgGrayLight: styles.getPropertyValue('--color-bg-gray-light'),
    bgGray: styles.getPropertyValue('--color-bg-gray'),
    bgGrayDark: styles.getPropertyValue('--color-bg-gray-dark'),
    bgBrand: styles.getPropertyValue('--color-brand-primary'),
    bgBrandLight: styles.getPropertyValue('--color-bg-brand-light'),
    bgBrandDark: styles.getPropertyValue('--color-brand-primary-dark)'),
    bgBrandAccent: styles.getPropertyValue('--color-brand-accent'),
    bgDeclare: styles.getPropertyValue('--color-bg-declare'),
    bgDeclareFaint: styles.getPropertyValue('--color-bg-declare-faint'),
    bgDeclareLight: styles.getPropertyValue('--color-bg-declare-light)'),
    bgAvert: styles.getPropertyValue('--color-bg-avert'),
    bgAvertFaint: styles.getPropertyValue('--color-bg-avert-faint'),
    bgAvertLight: styles.getPropertyValue('--color-bg-avert-light'),
    bgAffirm: styles.getPropertyValue('--color-bg-affirm'),
    bgAffirmFaint: styles.getPropertyValue('--color-bg-affirm-faint'),
    bgAffirmLight: styles.getPropertyValue('--color-bg-affirm-light'),
    /* Borders */
    borderWhite: styles.getPropertyValue('--color-border-white'),
    borderDefault: styles.getPropertyValue('--color-border-gray'),
    borderStandard: styles.getPropertyValue('--color-border-gray-standard'),
    borderLight: styles.getPropertyValue('--color-border-gray-light)'),
    borderDark: styles.getPropertyValue('--color-border-gray-dark'),
    borderBlack: styles.getPropertyValue('--color-border-black'),
    borderBrand: styles.getPropertyValue('--color-border-brand'),
    borderBrandLight: styles.getPropertyValue('--color-border-brand-light'),
    borderBrandDark: styles.getPropertyValue('--color-brand-primary-dark'),
    borderAvert: styles.getPropertyValue('--color-border-avert'),
    borderAffirm: styles.getPropertyValue('--color-border-affirm'),
    borderAffirmDark: styles.getPropertyValue('--color-text-affirm-dark'),
    borderDeclare: styles.getPropertyValue('--color-border-declare'),
};

export {
    colors
}