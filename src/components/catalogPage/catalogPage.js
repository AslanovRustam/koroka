import Container from "../container/container";
import Header from "../header/header";
import Search from "../search/search";
import Score from "../score/score";

export default function CatalogPage() {
  return (
    <div>
      <Header />
      <Container>
        <Search />
        <Score />
      </Container>
    </div>
  );
}
