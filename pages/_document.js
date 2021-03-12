import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-min.js"></script>
          <script src="/js/tether.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/classie.js"></script>
          <script src="/js/mixitup.min.js"></script>
          <script src="/js/nivo-lightbox.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/jquery.stellar.min.js"></script>
          <script src="/js/jquery.nav.js"></script>
          <script src="/js/smooth-scroll.js"></script>
          <script src="/js/smooth-on-scroll.js"></script>
          <script src="/js/wow.js"></script>
          <script src="/js/menu.js"></script>
          <script src="/js/jquery.vide.js"></script>
          <script src="/js/jquery.counterup.min.js"></script>
          <script src="/js/jquery.magnific-popup.min.js"></script>
          <script src="/js/waypoints.min.js"></script>
          <script src="/js/form-validator.min.js"></script>
          <script src="/js/contact-form-script.js"></script>
          <script src="/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
