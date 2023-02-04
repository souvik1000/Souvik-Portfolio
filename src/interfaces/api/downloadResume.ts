export namespace GET {
  const getURL = () => "My_Resume_1.5Yr_Experience.pdf";

  export const service = () => {
    fetch(getURL())
      .then((response) => response.blob())
      .then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting all property into anchor tag and click on it to download
        let anchorTag = document.createElement("a");
        anchorTag.download = "Souvik_Resume.pdf";
        anchorTag.href = fileURL;
        anchorTag.click();
      });
  };
}
