import * as React from 'react';
import { type ChangeEvent, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';



interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

interface ComplexSearchResponse {
  totalResults: number;
  offset: number;
  number: number;
  results: Recipe[];
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[] | null>([]);

  const handleSearch = async (): Promise<void> => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=a15d5ccf40414e79b58db4db072b75df`;
    const response = await fetch(url);
    const data: ComplexSearchResponse = await response.json();
    setRecipes(data.results);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleButtonClick = async () => {
    await handleSearch();
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search for recipes"
          aria-label="Search for recipes"
          value={query}
          onChange={handleInputChange}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={handleButtonClick}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <div className="row row-cols-1 row-cols-lg-2">
        {recipes &&
          recipes.map((recipe) => (
            <div key={recipe.id} className="col mb-4">
              <div className="list-group-item d-flex align-items-center">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="img-thumbnail d-none d-lg-inline"
                  style={{
                    width: '100px',
                    height: '100px',
                    marginRight: '1rem',
                  }}
                />
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="img-thumbnail d-inline d-lg-none"
                  style={{ width: '50px', height: '50px', marginRight: '1rem' }}
                />
                <span>{recipe.title}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchBar;
