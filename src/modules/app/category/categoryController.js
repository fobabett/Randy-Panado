'use strict';

module.exports = /*@ngInject*/
  function categoryController($scope, $stateParams) {

    $scope.activeTab = 'chronicles';
    $scope.category = $stateParams.category

    var mockContent = [
      {
        title: 'Trip to San Diego',
        categoryIcon: '../../../assets/icons/adventure.svg',
        category: 'adventures',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'Kinetic Cinematography',
        categoryIcon: '../../../assets/icons/photography.svg',
        category: 'tools & techniques',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'Bloopy',
        categoryIcon: '../../../assets/icons/adventures.svg',
        category: 'adventures',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'PuppyCat',
        categoryIcon: '../../../assets/icons/aerials.svg',
        category: 'aerials',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'bizzz',
        categoryIcon: '../../../assets/icons/corporate.svg',
        category: 'corporate',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'Meow',
        categoryIcon: '../../../assets/icons/gear-talk.svg',
        category: 'gear talk',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'Blah',
        categoryIcon: '../../../assets/icons/photography.svg',
        category: 'tools & techniques',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      }
    ];

    $scope.articles = mockContent;

  };