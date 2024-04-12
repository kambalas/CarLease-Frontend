import { Car } from '../types';

export const Cars: Car[] = [
  {
    make: 'Toyota',
    models: [
      {
        modelName: 'Corolla',
        variants: [
          {
            variantName: 'LE',
            years: [2018, 2019, 2020],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [132, 139],
            engineSizes: [1.8, 2.0],
          },
          {
            variantName: 'SE',
            years: [2019, 2020, 2021],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [132, 139],
            engineSizes: [1.8, 2.0],
          },
        ],
        years: [2018, 2019, 2020, 2021],
        fuelTypes: ['Gasoline', 'Hybrid'],
        enginePowers: [132, 139],
        engineSizes: [1.8, 2.0],
      },
      {
        modelName: 'Camry',
        variants: [
          {
            variantName: 'SE',
            years: [2019, 2020, 2021],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [203, 206],
            engineSizes: [2.5, 3.5],
          },
          {
            variantName: 'XLE',
            years: [2020, 2021, 2022],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [203, 206],
            engineSizes: [2.5, 3.5],
          },
        ],
        years: [2019, 2020, 2021, 2022],
        fuelTypes: ['Gasoline', 'Hybrid'],
        enginePowers: [203, 206],
        engineSizes: [2.5, 3.5],
      },
      {
        modelName: 'RAV4',
        variants: [
          {
            variantName: 'XLE',
            years: [2020, 2021, 2022],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [203, 219],
            engineSizes: [2.5],
          },
          {
            variantName: 'Limited',
            years: [2021, 2022, 2023],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [203, 219],
            engineSizes: [2.5],
          },
        ],
        years: [2020, 2021, 2022, 2023],
        fuelTypes: ['Gasoline', 'Hybrid'],
        enginePowers: [203, 219],
        engineSizes: [2.5],
      },
    ],
  },
  {
    make: 'Lexus',
    models: [
      {
        modelName: 'ES',
        variants: [
          {
            variantName: '350',
            years: [2019, 2020, 2021],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [302, 315],
            engineSizes: [3.5],
          },
          {
            variantName: '300h',
            years: [2020, 2021, 2022],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [215],
            engineSizes: [2.5],
          },
        ],
        years: [2019, 2020, 2021, 2022],
        fuelTypes: ['Gasoline', 'Hybrid'],
        enginePowers: [215, 302, 315],
        engineSizes: [2.5, 3.5],
      },
      {
        modelName: 'RX',
        variants: [
          {
            variantName: '350',
            years: [2020, 2021, 2022],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [295, 308],
            engineSizes: [3.5],
          },
          {
            variantName: '450h',
            years: [2021, 2022, 2023],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [308],
            engineSizes: [3.5],
          },
        ],
        years: [2020, 2021, 2022, 2023],
        fuelTypes: ['Gasoline', 'Hybrid'],
        enginePowers: [295, 308],
        engineSizes: [3.5],
      },
      {
        modelName: 'LS',
        variants: [
          {
            variantName: '500',
            years: [2021, 2022, 2023],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [416, 354],
            engineSizes: [3.5],
          },
          {
            variantName: '500h',
            years: [2022, 2023, 2024],
            fuelTypes: ['Gasoline', 'Hybrid'],
            enginePowers: [354],
            engineSizes: [3.5],
          },
        ],
        years: [2021, 2022, 2023, 2024],
        fuelTypes: ['Gasoline', 'Hybrid'],
        enginePowers: [354, 416],
        engineSizes: [3.5],
      },
    ],
  },

  {
    make: 'Audi',
    models: [
      {
        modelName: 'A4',
        variants: [
          {
            variantName: '40 TFSI',
            years: [2019, 2020, 2021],
            fuelTypes: ['Gasoline', 'Diesel'],
            enginePowers: [188, 201],
            engineSizes: [2.0],
          },
          {
            variantName: '45 TFSI',
            years: [2020, 2021, 2022],
            fuelTypes: ['Gasoline', 'Diesel'],
            enginePowers: [248, 261],
            engineSizes: [2.0],
          },
        ],
        years: [2019, 2020, 2021, 2022],
        fuelTypes: ['Gasoline', 'Diesel'],
        enginePowers: [188, 201, 248, 261],
        engineSizes: [2.0],
      },
      {
        modelName: 'A6',
        variants: [
          {
            variantName: '45 TFSI',
            years: [2020, 2021, 2022],
            fuelTypes: ['Gasoline', 'Diesel'],
            enginePowers: [248, 261],
            engineSizes: [2.0],
          },
          {
            variantName: '55 TFSI',
            years: [2021, 2022, 2023],
            fuelTypes: ['Gasoline', 'Diesel'],
            enginePowers: [335, 349],
            engineSizes: [3.0],
          },
        ],
        years: [2020, 2021, 2022, 2023],
        fuelTypes: ['Gasoline', 'Diesel'],
        enginePowers: [248, 261, 335, 349],
        engineSizes: [2.0, 3.0],
      },
      {
        modelName: 'Q5',
        variants: [
          {
            variantName: '45 TFSI',
            years: [2020, 2021, 2022],
            fuelTypes: ['Gasoline', 'Diesel'],
            enginePowers: [248, 261],
            engineSizes: [2.0],
          },
          {
            variantName: '55 TFSI',
            years: [2021, 2022, 2023],
            fuelTypes: ['Gasoline', 'Diesel'],
            enginePowers: [349],
            engineSizes: [3.0],
          },
        ],
        years: [2020, 2021, 2022, 2023],
        fuelTypes: ['Gasoline', 'Diesel'],
        enginePowers: [248, 261, 349],
        engineSizes: [2.0, 3.0],
      },
    ],
  },
];
