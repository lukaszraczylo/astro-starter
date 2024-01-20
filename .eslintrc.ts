module.exports = {
  // ...
  overrides: [
    {
      // Configuration for both `.astro` and `.vue` files.
      files: ['*.astro', '*.vue', '.tsx'],
      // Enable ESLint plugins for both
      plugins: ['astro', 'vue', '@typescript-eslint'],
      env: {
        // Environment settings for both
        browser: true,
        node: true,
        es2020: true,
        'astro/astro': true,
      },
      parser: 'vue-eslint-parser', // This parser can handle both file types.
      parserOptions: {
        parser: '@typescript-eslint/parser', // TypeScript parser for script blocks
        extraFileExtensions: ['.astro', '.vue'],
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true, // Enable for Vue 3 support
        },
      },
      rules: {
        // Shared rules for both Astro and Vue
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        'vue/no-unused-vars': 'error',
        'vue/multi-word-component-names': 'error',
        // other shared or specific rules...

        // If using Prettier
        'prettier/prettier': 'on',
      },
    },
    {
      // Define the configuration for `.astro` file.
      files: ['*.vue', '.tsx'],
      parserOptions: {
        sourceType: 'node',
      },
    },
  ],
}
