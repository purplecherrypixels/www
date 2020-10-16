import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentDidMount() {
    var customViewportCorrectionVariable = "vh";

    function setViewportProperty(doc) {
      var prevClientHeight;
      var customVar = "--" + (customViewportCorrectionVariable || "vh");
      function handleResize() {
        var clientHeight = doc.clientHeight;
        if (clientHeight === prevClientHeight) return;
        requestAnimationFrame(function updateViewportHeight() {
          doc.style.setProperty(customVar, clientHeight * 0.01 + "px");
          prevClientHeight = clientHeight;
        });
      }
      handleResize();
      return handleResize;
    }
    window.addEventListener(
      "resize",
      setViewportProperty(document.documentElement)
    );
  }

  render() {
    return (
      <Html>
        <Head lang="de">
          {/* TODO: local download of font */}
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
