## Frequently Asked Questions 🐱

----

**Q:** *"What is an esoteric programming language? Is this language intended for real use?"*

**A:** An [esoteric programming language](https://en.wikipedia.org/wiki/Esoteric_programming_language) is a programming language created for artistic purposes and/or otherwise not intended for real use in productation. Esoteric programming languages are typically not designed with usability in mind. Mewlix is one such case: It's an odd language themed around cats. \_(:3」∠)\_

You *can* use Mewlix for hobby projects, however. Mewlix is designed **primarily** for making small games, and it tries to do a well-enough job at just that.

----

**Q:** *"Can I use Mewlix for my own project?"*

**A:** Absolutely! I'd be flattered if you did. Please let me know if you do, I'd genuinely love to see it!

----

**Q:** *"I'm having issues running my Mewlix project locally using the `file:///` scheme!"*

**A:** [This is for security reasons](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp#loading_a_local_file). Most modern browsers heavily limit what you can do using the `file:///` scheme. If you want to run a project locally, use the `mewlix run` command; this will run your project in a simple HTTP server. You can read the [documentation for Mewlix's command-line interface](@mewlix/compiler#command-line-interface) to learn more.
