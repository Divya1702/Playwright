function lastWord(str) {
   let lastword = str.trim().split(" ");
   let strlen = lastword.length;
   console.log("last word is", lastword[strlen - 1]);
   console.log("Length last word is", lastword[strlen - 1].length);
}

lastWord("Hello world");
lastWord("  fly me to the moon ");

function strAnagram(str1, str2) {
   let string1 = str1.trim().toLowerCase().split("").sort().join();
   let string2 = str2.trim().toLowerCase().split("").sort().join();
   console.log(string1);
   if (string1 === string2) {
      console.log(string1, string2, "are anagrams");
   }
   else
      console.log(string1, string2, "are not anagrams");
}
strAnagram('listen', 'silent');
strAnagram('hello', 'world');