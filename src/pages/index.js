import React from 'react'
import Link from 'gatsby-link'
import appStoreImg from '../img/app-store.png'
import googlePlayImg from '../img/google-play.png'
import phoneImg from '../img/phone.png'
import GalleryImage from '../components/GalleryImage'
import NavLeft from '../components/NavLeft'
import NavRight from '../components/NavRight'
import GalleryModal from '../components/GalleryModal'
import { slide as Menu } from 'react-burger-menu'





let imgUrls = [

  { id: 1,
    category: 'animals',
    url:'http://mypresentation.ru/documents/884219c23e6888b602805f0674eeb70e/img37.jpg'
  },
  { id: 2,
    category: 'animals',
    url:'https://econet.ru/uploads/pictures/119697/content_10__econet_ru.jpg'
  },
  { id: 3,
    category: 'animals',
    url:'http://www.pavelin.ru/images/stories/leopard/leo_011.jpg'
  },
  { id: 4,
    category: 'animals',
    url:'https://www.motto.net.ua/pic/201210/800x600/motto.net.ua-43652.jpg'
  },
  { id: 5,
    category: 'auto',
    url:'http://luxfon.com/pic/201208/800x600/luxfon.com-16378.jpg'
  },
  {id: 6,
    category: 'auto',
    url:'http://luxfon.com/pic/201211/800x600/luxfon.com-17656.jpg'
  },
  {id: 7,
    category: 'auto',
    url:'https://www.motto.net.ua/pic/201209/800x600/motto.net.ua-23658.jpg'
  },
  {id: 8,
    category: 'auto',
    url:'http://img.desktopwallpapers.ru/women/pics/6e78334bca1eb1f89ab15.jpg'
  }, 
  {id: 9,
    category: 'girls',
    url:'http://acrosscars.com/uploads/fotos/2015-fnr_concept6.jpg'
  },
  {id: 10,
    category: 'girls',
    url:'https://img.day.az/clickable/00/0/354223_004.jpg'
  },
  {id: 11,
    category:'girls',
    url:'https://4589861635b91edaa841-e4ddf20bbb131c4268e6018b2e3d1bb8.ssl.cf1.rackcdn.com/426850.jpg'
  },

  { id: 12,
    category: 'girls',
    url:'http://ij.drivenn.ru/jvrcgg1hl076q_1o0xzqe.jpeg'
  } 
  
];



class IndexPage extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: '',
      fullScreenPhotoIndex: 0,
      displayedfotos: imgUrls
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
      Index = imgUrls.length - 1;
    } else if (Index >= imgUrls.length) {
      Index = 0;
    }

    this.setState({fullScreenPhotoIndex: Index});

  };

  //Показать фото девушек 
  handleSorting(e) {
    e.preventDefault();
    imgUrls.filter(function(el) {
        return el.category == 'girls';
    });
  }

  render() {
    var numImages = imgUrls.length;
    var fullPhotoURL = this.state.url ;
    var fullPhotoImageIndex = this.state.fullScreenPhotoIndex;
    if (fullPhotoImageIndex >= 0 && fullPhotoImageIndex < numImages) {
      fullPhotoURL = imgUrls[fullPhotoImageIndex].url;
    }

    return (
    <div>
    <Menu>
       <a id="home" className="menu-item" href="##">Животные</a>
       <a id="about" className="menu-item" href="##">Автомобили</a>
       <a onClick={ (e) => this.handleSorting(e) }  className="menu-item" href="##">Девушки</a>
       <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    </Menu>
      <div className='container-fluid gallery-container'>
        <div className='row'>
          {imgUrls.map((item, Index) => {
            let url = item.url;
            return <div key={Index} className='col-xs-6 col-md-3 col-lg-2'>
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
