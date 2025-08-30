import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-require-imports': 'off',
			'indent': ['error', 'tab'],
			'react/display-name': 'off',
			'react/prop-types': 'off',
			'react/no-deprecated': 'off',
			'semi': ['error', 'always'],
			'object-curly-spacing': ['error', 'always'],
		}
	}
];