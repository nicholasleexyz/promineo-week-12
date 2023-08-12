/* eslint-disable prefer-const */
/* eslint-disable max-len */

/** @type{ {commonName: String, scientificName: String, family: String, description: String}[] } */
export let plants = [
  {'commonName': 'False \'ohe',
    'scientificName': 'Munroidendron racemosum (Forbes) Sherff',
    'family': 'Araliaceae',
    'description': 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\n Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.'},
  {'commonName': 'Lowland Beardtongue',
    'scientificName': 'Penstemon alluviorum Pennell',
    'family': 'Scrophulariaceae',
    'description': 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.'},
  {'commonName': 'Dwarf Red Blackberry',
    'scientificName': 'Rubus pubescens Raf.',
    'family': 'Rosaceae',
    'description': 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'},
  {'commonName': 'Tickbush',
    'scientificName': 'Kunzea ambigua (Sm.) Druce',
    'family': 'Myrtaceae',
    'description': 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'},
  {'commonName': 'Dicranum Moss',
    'scientificName': 'Dicranum Hedw.',
    'family': 'Dicranaceae',
    'description': 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.'},
  {'commonName': 'Dot Lichen',
    'scientificName': 'Arthonia lapidicola (Taylor) Branth & Rostrup',
    'family': 'Arthoniaceae',
    'description': 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.'},
  {'commonName': 'Snake Canyon Milkvetch',
    'scientificName': 'Astragalus vallaris M.E. Jones',
    'family': 'Fabaceae',
    'description': 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.'},
  {'commonName': 'Hoover\'s Cryptantha',
    'scientificName': 'Cryptantha hooveri I.M. Johnst.',
    'family': 'Boraginaceae',
    'description': 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.'},
  {'commonName': 'Short\'s Spreading Chervil',
    'scientificName': 'Chaerophyllum procumbens (L.) Crantz var. shortii Torr. & A. Gray',
    'family': 'Apiaceae',
    'description': 'Sed ante. Vivamus tortor. Duis mattis egestas metus.'},
  {'commonName': 'Mustang Monardella',
    'scientificName': 'Monardella lanceolata A. Gray var. lanceolata',
    'family': 'Lamiaceae',
    'description': 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'},
  {'commonName': 'Mojave Thistle',
    'scientificName': 'Cirsium mohavense (Greene) Petr.',
    'family': 'Asteraceae',
    'description': 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'},
];

/**
 * @param {{commonName: String, scientificName: String, family: String, description: String}[] } newPlants
 */
export function updatePlants(newPlants) {
  plants = newPlants;
}
