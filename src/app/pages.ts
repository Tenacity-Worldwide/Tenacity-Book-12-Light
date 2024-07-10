import { Page, Section } from './types';

const sections: Section[] = [
  { name: 'Cover', start: 1 },
  { name: 'Author', start: 2 },
  { name: 'Best Experience for Mobile Devices', start: 3 },
  // { name: 'Authors', start: 3 },
  { name: 'Dedication', start: 4 },
  { name: 'Introduction', start: 5 },
  { name: 'Table of Contents', start: 6 },
  { name: 'Unit 1', start: 7, end: 35 },
  { name: 'Unit 2', start: 36, end: 58 },
  { name: 'Unit 3', start: 59, end: 79 },
  { name: 'Revision 1 (Units 1 - 3)', start: 80, end: 86 },
  { name: 'Unit 4', start: 87, end: 108 },
  { name: 'Unit 5', start: 109, end: 130 },
  { name: 'Unit 6', start: 131, end: 153 },
  { name: 'Revision 2 (Units 4 - 6)', start: 154, end: 158 },
  { name: 'Unit 7', start: 159, end: 178 },
  { name: 'Unit 8', start: 179, end: 200 },
  { name: 'Unit 9', start: 201, end: 219 },
  { name: 'Revision 3 (Units 7 - 9)', start: 220, end: 226 },
  { name: 'Unit 10', start: 227, end: 249 },
  { name: 'Unit 11', start: 250, end: 270 },
  { name: 'Unit 12', start: 271, end: 281 },
  { name: 'Revision 4 (Units 10 - 12)', start: 282, end: 288 },
  { name: 'Speaking Activities', start: 289, end: 296 },
  { name: 'Appendix 1', start: 297, end: 299 },
  { name: 'Appendix 2', start: 300, end: 302 },
  { name: 'Appendix 3', start: 303, end: 304 },
  { name: 'Appendix 4', start: 305, end: 320 },
  // // { name: 'Appendix 5', start: 256, end: 257 },
  { name: 'Acknowledgements', start: 321,end:321},
];

const pages: Page[] = [];

sections.forEach((section) => {
  if (!section.end) {
    pages.push({ title: section.name, index: section.start });
    return;
  }

  for (let i = section.start; i <= section.end; i++) {
    if(i == 321){
      pages.push({
        index: i,
        title: `${section.name}`,
      })
      continue
    }
    pages.push({
      index: i,
      title: `${section.name} - p. ${i - 6}`,
    });
  }

  section.name += ` - p. ${section.start - 6}`;
});

export default { sections, pages };
