import { EuiComboBox } from '@elastic/eui';
import { useState, useEffect, useCallback } from 'react';

export default ({
  listaMunicipios,
  setCodigoProvincia,
  setNombreMunicipio,
  setCodigoIne,
}) => {
  const [selectedOptions, setSelected] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const onChange = (selectedOptions) => {
    setSelected(selectedOptions);
  };

  useEffect(() => {
    if (selectedOptions.length > 0) {
      setCodigoProvincia(selectedOptions[0].CODPROV);
      setNombreMunicipio(selectedOptions[0].label);
      setCodigoIne(selectedOptions[0].CODIGOINE.substring(0, 5));
      console.log(selectedOptions);
    }
  }, [selectedOptions]);

  const renameKey = (object, key, newKey) => {
    const clonedObj = clone(object);
    const targetKey = clonedObj[key];
    delete clonedObj[key];
    clonedObj[newKey] = targetKey;
    return clonedObj;
  };
  const clone = (obj) => Object.assign({}, obj);

  const onSearchChange = useCallback((searchValue) => {
    setLoading(true);
    setOptions([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps

    setLoading(false);
    const cities = listaMunicipios.map((el) => {
      return renameKey(el, 'NOMBRE', 'label');
    });

    setOptions(
      cities.filter((option) => {
        return option.label.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, []);

  useEffect(() => {
    // Simulate initial load.
    onSearchChange('');
  }, [onSearchChange]);

  return (
    <EuiComboBox
      placeholder="Busca municipio"
      async
      singleSelection={{ asPlainText: true }}
      options={options}
      selectedOptions={selectedOptions}
      isLoading={isLoading}
      onChange={onChange}
      onSearchChange={onSearchChange}
    />
  );
};
