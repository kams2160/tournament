export const config = {
  sourcePath: 'static/data/',
  data: [
    {
      name: 'basic',
      files: ['1.json', '2.json', '3.json', '4.json']
    },
    {
      name: 'double-elimination',
      files: ['1.json', '2.json']
    },
    {
      name: 'double-elimination-finals',
      files: ['1.json']
    },
    {
      name: 'non-symmetrical',
      files: ['1.json']
    },
    {
      name: 'single-proceder',
      files: ['1.json', '2.json']
    }
  ],
  menuItems: [
    {
      url: 'single-elimination',
      name: 'Single Elimination'
    },
    {
      url: 'double-elimination',
      name: 'Double Elimination'
    },
    {
      url: 'double-elimination-finals',
      name: 'Double Elimination Finals'
    }
  ]
}