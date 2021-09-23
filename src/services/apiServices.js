export const fetchMunicipios = async () => {
  const res = await fetch('https://www.el-tiempo.net/api/json/v2/municipios');
  const fetchData = await res.json();
  return fetchData;
};

export const fetchMeteoData = async (codProv, codeIne) => {
  const res = await fetch(
    `https://www.el-tiempo.net/api/json/v2/provincias/${codProv}/municipios/${codeIne}`
  );
  const fetchData = await res.json();
  return fetchData;
};
