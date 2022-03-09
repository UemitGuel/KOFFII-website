import {
    Container,
    Flex,
    Spacer,
  } from "@chakra-ui/react";

export default function Impressum() {
  return (
    <Container maxW="container.md">
      <h1>Impressum</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        &Uuml;mit G&uuml;l
        <br />
        Josefine-Clouth-Stra&szlig;e 55
        <br />
        50733 K&ouml;ln
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 151 20262604
        <br />
        Telefax: -<br />
        E-Mail: uemitgul@gmail.com
      </p>

      <p>
        Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
      </p>
    </Container>
  );
}
