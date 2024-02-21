interface LGBTQIADict {
  [key: string]: { term: string; color: string; link: string };
}

export const lgbtqiaDict: LGBTQIADict = {
  l: {
    term: "Lesbian",
    color: "text-pink-500",
    link: "https://en.wikipedia.org/wiki/Lesbian",
  },
  g: {
    term: "Gay",
    color: "text-purple-500",
    link: "https://en.wikipedia.org/wiki/Gay",
  },
  b: {
    term: "Bisexual",
    color: "text-blue-500",
    link: "https://en.wikipedia.org/wiki/Bisexual",
  },
  t: {
    term: "Transgender",
    color: "text-yellow-500",
    link: "https://en.wikipedia.org/wiki/Transgender",
  },
  q: {
    term: "Queer or Questioning",
    color: "text-green-500",
    link: "https://en.wikipedia.org/wiki/Queer",
  },
  i: {
    term: "Intersex",
    color: "text-red-500",
    link: "https://en.wikipedia.org/wiki/Intersex",
  },
  a: {
    term: "Asexual or Ally",
    color: "text-gray-500",
    link: "https://en.wikipedia.org/wiki/Asexuality",
  },
};

interface LGBTQIADictInfo {
  [key: string]: { term: string; color: string; link: string };
}

export function getInfo(selectors: string | string[]): LGBTQIADictInfo {
  const info: LGBTQIADictInfo = {};
  let allSelectors: string[];
  if (typeof selectors === "string") {
    allSelectors = [selectors];
  } else {
    allSelectors = [...selectors];
  }

  const seenLetters = new Set<string>();
  for (const selector of allSelectors) {
    const lowercaseSelector = selector.toLowerCase();
    for (const letter of lowercaseSelector) {
      if (seenLetters.has(letter)) {
        throw new Error(`Duplicate letter '${letter}' found in the selector`);
      }
      if (lgbtqiaDict[letter]) {
        info[letter] = {
          term: lgbtqiaDict[letter].term,
          color: lgbtqiaDict[letter].color,
          link: lgbtqiaDict[letter].link,
        };
      } else {
        throw new Error(`No term found for letter '${letter}'`);
      }
      seenLetters.add(letter);
    }
  }
  return info;
}
