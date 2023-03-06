import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { ALL_COUNTRIES } from "../config";
export const Details = () => {
  const { name } = useParams();

  const navigate = useNavigate();
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountries(data[0]));
  }, [name]);

  return (
    <div>
      <Button style={{ marginTop: "1rem" }} onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </Button>
      {countries && <Info {...countries} />}
    </div>
  );
};
