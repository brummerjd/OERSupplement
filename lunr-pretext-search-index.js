var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ch-chapter-title",
  "level": "1",
  "url": "ch-chapter-title.html",
  "type": "Chapter",
  "number": "1",
  "title": "Chapter 5 Review Problems",
  "body": " Chapter 5 Review Problems      Integration Techniques   We have learned about four primary techniques of integration this semester:  Integration by Substitution  Integration by Parts  Partial Fraction Decomposition  Trigonometric Substitution  Consider the following integral: In the space below, justify how you would use two of the techniques of integration listed above to solve the given integral. For each technique, you should say in a sentence why the technique is applicable to the given integral, then indicate the first step or substitution that you would use accordingly. You do not need to actually solve the integral using either technique.       The denominator is of the form , where , so we can do the Trigonometric Substitution  . In this instance, , so we substitute .    The derivative of the argument of the square root is present in the numerator up to a constant multiple, so we can perform an Integration by Substitution . That is, if we differentiate with respect to , we get , which is in the numerator if we divide it by the constant . This allows the -substitution to completely rewrite the integral in terms of .        Partial Fraction Decomposition   Without solving for any coefficients, apply partial fraction decomposition to the following rational expression: Your answer should be a sum of fractions whose numerators include coefficients - coefficients you do not need to solve for.    We first factor the denominator. Note that is irreducible (it does not factor), while So we have Now, again since is an irreducible quadratic, the numerator of its term in the partial fraction decomposition should have degree one less than the degree of it. That is, the numerator should be degree . A general degree 1 polynomial is of the form , for some and . The two linear factors and are similar. They are degree 1 polynomials, so the numerator of the term in their partial fraction should have degree . Degree 0 polynomials are constants, say and . This gives the decomposition      Improper Integrals   Determine the value of the following improper integral (or show that the integral diverges):  Note: Your work will be graded for mathematical accuracy, so be clear and careful about using limit notation as relevant.         "
},
{
  "id": "ch-chapter-title-2",
  "level": "2",
  "url": "ch-chapter-title.html#ch-chapter-title-2",
  "type": "Example",
  "number": "1.0.1",
  "title": "Integration Techniques.",
  "body": " Integration Techniques   We have learned about four primary techniques of integration this semester:  Integration by Substitution  Integration by Parts  Partial Fraction Decomposition  Trigonometric Substitution  Consider the following integral: In the space below, justify how you would use two of the techniques of integration listed above to solve the given integral. For each technique, you should say in a sentence why the technique is applicable to the given integral, then indicate the first step or substitution that you would use accordingly. You do not need to actually solve the integral using either technique.       The denominator is of the form , where , so we can do the Trigonometric Substitution  . In this instance, , so we substitute .    The derivative of the argument of the square root is present in the numerator up to a constant multiple, so we can perform an Integration by Substitution . That is, if we differentiate with respect to , we get , which is in the numerator if we divide it by the constant . This allows the -substitution to completely rewrite the integral in terms of .      "
},
{
  "id": "ch-chapter-title-3",
  "level": "2",
  "url": "ch-chapter-title.html#ch-chapter-title-3",
  "type": "Example",
  "number": "1.0.2",
  "title": "Partial Fraction Decomposition.",
  "body": " Partial Fraction Decomposition   Without solving for any coefficients, apply partial fraction decomposition to the following rational expression: Your answer should be a sum of fractions whose numerators include coefficients - coefficients you do not need to solve for.    We first factor the denominator. Note that is irreducible (it does not factor), while So we have Now, again since is an irreducible quadratic, the numerator of its term in the partial fraction decomposition should have degree one less than the degree of it. That is, the numerator should be degree . A general degree 1 polynomial is of the form , for some and . The two linear factors and are similar. They are degree 1 polynomials, so the numerator of the term in their partial fraction should have degree . Degree 0 polynomials are constants, say and . This gives the decomposition    "
},
{
  "id": "ch-chapter-title-4",
  "level": "2",
  "url": "ch-chapter-title.html#ch-chapter-title-4",
  "type": "Example",
  "number": "1.0.3",
  "title": "Improper Integrals.",
  "body": " Improper Integrals   Determine the value of the following improper integral (or show that the integral diverges):  Note: Your work will be graded for mathematical accuracy, so be clear and careful about using limit notation as relevant.        "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
