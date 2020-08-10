module.exports = {
  '*.+(js|jsx|ts|tsx)': [
    'eslint',
    'jest --findRelatedTests --collectCoverage=0',
  ],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
  ],
};
