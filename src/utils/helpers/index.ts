export const removeHtmlTags = (inputString: string): string => {
  return inputString.replace(/<\/?[^>]+(>|$)/g, '');
};

export const removeHtmlAndSpecialChars = (title: string) => {
  if (typeof window !== 'undefined') {
    // Create a temporary DOM element
    const tempElement = document.createElement('div');
    // Set the input string as the innerHTML of the element
    tempElement.innerHTML = title;
    // Get the text content without HTML tags
    const textContent = tempElement.textContent || tempElement.innerText;
    // Remove special characters like copyright registered symbol
    const cleanedString = textContent.replace(/[\u00A9\u00AE]/g, '');

    return cleanedString;
  }
};

export const hasDuplicate = (arr: string[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        // Duplicate Detected
        return arr[i];
      }
    }
  }
  // No Duplicates
  return arr.join(' ');
};
