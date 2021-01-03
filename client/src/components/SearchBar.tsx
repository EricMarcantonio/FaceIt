import React, { useCallback, useEffect, useState } from 'react';
import { Autocomplete } from '@shopify/polaris';
import { container } from '../GlobalStateContainer';

export const SearchBar = () => {
    const con = container.useContainer();
    const deselectedOptions = [];
    const noRepeats = [];
    if (con.photos) {
        for (let index = 0; index < con.photos.length; index++) {
            const element = con.photos[index];
            if (!noRepeats.includes(element.img.features.label)) {
                deselectedOptions.push({
                    value: element.img.features.label,
                    label: element.img.features.label,
                });
                noRepeats.push(element.img.features.label);
            }
        }
    }
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(deselectedOptions);

    useEffect(() => {
        updateText(inputValue);
    }, [con.photos]);

    const updateText = useCallback(
        value => {
            setInputValue(value);
            if (value === '') {
                setOptions(deselectedOptions);
                return;
            }

            const filterRegex = new RegExp(value, 'i');
            const resultOptions = deselectedOptions.filter(option =>
                option.label.match(filterRegex)
            );
            setOptions(resultOptions);
        },
        [deselectedOptions]
    );

    const updateSelection = useCallback(
        selected => {
            const selectedValue = selected.map(selectedItem => {
                const matchedOption = options.find(option => {
                    return option.value.match(selectedItem);
                });
                return matchedOption && matchedOption.label;
            });

            setSelectedOptions(selected);
            setInputValue(selectedValue);
            
        },
        [options]
    );

    const textField = (
        <Autocomplete.TextField
            onChange={updateText}
            label=""
            value={inputValue}
            // prefix={<Icon source={SearchMinor} color="inkLighter" />}
            placeholder="Search for an image"
        />
    );

    return (
        
        <div>
            <Autocomplete
                options={options}
                selected={selectedOptions}
                onSelect={updateSelection}
                textField={textField}
                {...console.log(inputValue)}
            />
        </div>
    );
};
