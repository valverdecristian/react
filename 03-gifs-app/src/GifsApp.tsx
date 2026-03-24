import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";

const GifsApp = () => {
  return (
    <>
      <CustomHeader title="Buscador de Gifs" description="descubre y comparte el gif perfecto" />

      <SearchBar placeholder="Buscar Gifs" />

      <PreviousSearches />

      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
                {gif.width} x {gif.height}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default GifsApp