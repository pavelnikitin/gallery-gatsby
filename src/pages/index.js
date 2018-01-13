import React from 'react'
import Link from 'gatsby-link'
import GalleryImage from '../components/GalleryImage'
import NavLeft from '../components/NavLeft'
import NavRight from '../components/NavRight'
import GalleryModal from '../components/GalleryModal'
import { slide as Menu } from 'react-burger-menu'
import girl1 from '../img/girl1.png'
import girl2 from '../img/girl2.png'
import girl3 from '../img/girl3.png'
import girl4 from '../img/girl4.png'
import girl5 from '../img/girl5.png'
import girl6 from '../img/girl6.png'
import car1 from '../img/car1.png'
import car2 from '../img/car2.png'
import car3 from '../img/car3.png'
import car4 from '../img/car4.png'
import car5 from '../img/car5.png'
import car6 from '../img/car6.png'
import animal1 from '../img/animal1.png'
import animal2 from '../img/animal2.png'
import animal3 from '../img/animal3.png'
import animal4 from '../img/animal4.png'
import animal5 from '../img/animal5.png'
import animal6 from '../img/animal6.png'










let fotos = [

  
  {id: 1,
    category: 'girls',
    url: girl1
  },
  {id: 2,
    category:'auto',
    url: car1
  }, 
  { id: 3,
    category: 'animals',
    url: animal1
  },
  { id: 4,
    category: 'animals',
    url: animal2
  },
  { id: 5,
    category: 'girls',
    url: girl2
  },
  { id: 6,
    category: 'animals',
    url: animal3
  },
  { id: 7,
    category: 'animals',
    url: animal4
  },
  {id: 8,
    category: 'girls',
    url: girl3
  },
  { id: 9,
    category: 'animals',
    url: animal5
  },
  {id: 10,
    category: 'girls',
    url: girl4
  },
  {id: 11,
    category: 'girls',
    url: girl5
  },
  {id: 12,
    category: 'auto',
    url: car2
  },
  {id: 13,
    category: 'auto',
    url: car3
  },
  {id: 14,
    category: 'girls',
    url: girl6
  }, 
  {id: 15,
    category:'auto',
    url: car4
  },
  { id: 16,
    category: 'auto',
    url: car5
  },
  { id: 17,
    category: 'animals',
    url: animal6
  },
  {id: 18,
    category:'auto',
    url: car6
  }
  
];



class IndexPage extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: '',
      fullScreenPhotoIndex: 0,
      displayedFotos: fotos
    }

    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
    this.handlePhotoNavClick = this.handlePhotoNavClick.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
      
  }


   // Открытие модального окна
   openModal(url,e, index) {
    
    e.preventDefault();
    
    this.setState({ showModal: true, url: url, fullScreenPhotoIndex: index})
  };

  // Закрытие модального окна
  closeModal() {
    this.setState({showModal: false, url: ''})
  };


  // Навигация по фотографиям
  handlePhotoNavClick(e,delta) {

    e.preventDefault();

    var Index = this.state.fullScreenPhotoIndex + delta;

    // Циклирование просмотра, возврат к первому фото после просмотра последнего и наоборот
    if(Index < 0) {
      Index = this.state.displayedFotos.length - 1;
    } else if (Index >= this.state.displayedFotos.length) {
      Index = 0;
    }

    this.setState({fullScreenPhotoIndex: Index});

  };

  //Сортировка по категориям
  handleSorting(e, gamma) {
    e.preventDefault();
    if (gamma !== 'all') {
    
    var displayedFotos = fotos.filter((item) => {
        return item.category == gamma;
    });
  } else  {displayedFotos = fotos};

    this.setState({displayedFotos: displayedFotos});
  }

  render() {
    var numImages = this.state.displayedFotos.length;
    var fullPhotoURL = this.state.url ;
    var fullPhotoImageIndex = this.state.fullScreenPhotoIndex;
    if (fullPhotoImageIndex >= 0 && fullPhotoImageIndex < numImages) {
      fullPhotoURL = this.state.displayedFotos[fullPhotoImageIndex].url;
    }

    return (
    <div>
    <Menu>
       <a onClick={(e, gamma) => this.handleSorting(e,'animals') }  className="menu-item" href="#">Животные</a>
       <a onClick={(e, gamma) => this.handleSorting(e,'auto') }  className="menu-item" href="#">Автомобили</a>
       <a onClick={(e, gamma) => this.handleSorting(e,'girls') }  className="menu-item" href="#">Девушки</a>
       <a onClick={(e, gamma) => this.handleSorting(e,'all') } className="menu-item--small" href="#">Все фото</a>
    </Menu>
      <div className='container-fluid gallery-container'>
        <div className='row'>
          {this.state.displayedFotos.map((item, Index) => {
            let url = item.url;
            return <div key={item.id} className='col-xs-6 col-sm-4 col-md-3 col-lg-2'>
              <div className='gallery-card'>
                <GalleryImage src={url}  alt={'Image number ' + (Index+ 1)}/>

                <i
                  className='icon ion-search'
                  value={item.url}
                  onClick={(e) => this.openModal(url,e, Index)}></i>
              </div>
            </div>
          })
}   
        </div>
        <GalleryModal isOpen={this.state.showModal}  onClick={this.closeModal} src={fullPhotoURL}>
            <NavLeft onClick={(e,delta) => this.handlePhotoNavClick(e, -1)}></NavLeft>
            <NavRight onClick={(e,delta) => this.handlePhotoNavClick(e, 1)}></NavRight>
        </GalleryModal> 
      </div>
    </div>
    )
  }

}

export default IndexPage
