# v1.3.0 - 16-01-2026
40 new pages of text and numerous fixes and updated sections.
The main highlights are a new section on CNOT mapping and routing for restricted architectures, a general update to the MBQC chapter to improve readability, and several new section in the last chapter on Fault-tolerant quantum computing including an end-to-end cost-analysis of Shor's algorithm.

Breaking changes:
* CNOT Circuit extraction is now done from the right instead of from the left, so that the Gaussian elimination involves row operations instead of column operations.
* H-boxes are now labelled by a real number denoting the phase, instead of a general complex number. So whereas something might have been labelled by e^{i alpha}, it would now just be labelled by alpha.
* Due to change in convention for rows and columns for stabilizer matrices, many matrix arrows now contain transposes where they did not before. This matches the notation better to that in the literature.

New sections and material:
* Several new exercises throughout the book.
* Added Acknowledgements in Section 1.3.
* Section 4.4 and advanced section 4.6.2 on CNOT routing and architecture aware mapping.
* 10.2.4 on the Graphical Fourier transform of H-boxes.
* More information on different noise models in chapter 12.
* 12.3.2 on Transversal logical measurements in CSS codes.
* New final section of the book 12.4 where we give a high-level end-to-end cost analysis of Shor's algorithm.

Updated sections and material:
* Improved the cheatsheet chapter 8.
* General improvements to the readability of section 9.1 in MBQC and this chapter in general.
* Section on catalysing completeness is moved to advanced material 11.6.5.
* Updated section on magic state distillation to make it less finicky.

# v1.2.0 - 06-08-2025
53 new pages of text, mostly in expanded introductions, summaries and a new cheatsheet chapter.

New or changed content:
* Each chapter now has a more expanded introduction that more clearly explains the motivation of that chapter and what you can expect in it.
* Each chapter now has an expanded "Summary: What to Remember" section with more diagrams.
* Added a new Chapter 8 Cheatsheets with several convenient overviews of diagrams, rewrite rules and constructions used in the book. Note that this changes the chapter number of all the chapters coming after.
* Expanded explanations on scalable notation. They are now briefly introduce in the Phase-free chapter, before expanded upon in the Universal Circuits chapter (Section 7.2). BREAKING CHANGE: We now represent the matrix for a collection of phase gadgets with a transpose, this makes the material using scalable notation in the Fault-tolerant computing chapter match the literature better.
* Numerous typos and small bugs fixed.
* The HTML version should now work better when the user is in darkmode.

# v1.1.0 - 22-10-2024
Lots of fixes for mathematical typos and fixes to improve consistency across sections and chapters.
About 6 pages of new content.

New or changed content:
* New section on gate-by-gate simulation in Section 7.8.1.
* Rewritten Section 7.5 to use more concrete and better bound on approximation error, and updated 7.8.2 to match.
* Moved Chapter 9 sections "More rules for the H-box", "From arbitrary reversible functions to Toffolis" and "2-leel operators" to advanced material.
* A new example and exercise in Chapter 6.
* A lot more references in Chapter 11.

Bug fixes and consistency:
* More careful about using \propto when an equality is up to scalar.
* Streamlined some notations across chapters.
* Numerous (mathematical) typos fixed across all chapters.


# v1.0.0 - 11-09-2024
Initial release