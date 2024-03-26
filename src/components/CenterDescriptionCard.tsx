import React from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ResourceCardProps {
  description: string;
}


// .Vector {
//   width: 233.7px;
//   height: 214px;
//   flex-grow: 0;
//   margin: 112px 0 0 113.3px;
//   padding: 130px 41px 14.2px 113.2px;
//   transform: rotate(-343.56deg);
//   background-color: #fff;
// }

const VectorStyle = {
  width: 233.7,
  height: 214,
  flexGrow: 0,
  margin: '112px 0 0 113.3px',
  padding: '130px 41px 14.2px 113.2px',
  transform: 'rotate(-343.56deg)',
  backgroundColor: '#fff',
}

// .SmileVector {
//   width: 79.4px;
//   height: 69.9px;
//   transform: rotate(-350deg);
//   background-color: #fb4b45;
// }

const SmileVectorStyle = {
  width: 79.4,
  height: 69.9,
  transform: 'rotate(-350deg)',
  backgroundColor: '#fb4b45',
}

export default function CenterDescriptionCard({ description }: ResourceCardProps) {
  return (
    <div>
      <IonCard color={'danger'} style={{
        width: 370,
        height: 370,
      }}>
        <IonCardContent className='align-middle'>
          <IonCardSubtitle style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          >
            {
              description
            }
          </IonCardSubtitle>   
        </IonCardContent>
        <div style={{
          bottom: 0,
          
        }}>
        <svg
      width={213}
      height={181}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        bottom: 0,
        position: 'absolute',
        right: 0,
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 112.215v.188c.033 26.196 13.765 51.631 38.2 65.462A77.29 77.29 0 0044.399 181H213V19.507a75.388 75.388 0 00-13.481-9.724l-.017-.005C187.807 3.157 175.091.008 162.546 0h-.088c-26.214.015-51.673 13.748-65.511 38.197-.343.607-.657 1.24-.982 1.852-32.685-9.372-68.71 4.392-86.188 35.264C3.166 86.99.016 99.687 0 112.215zm158.919-6.168c5.508 14.285-1.362 30.444-15.583 36.351s-30.506-.63-36.742-14.621l-9.17 3.807c8.205 19.306 30.474 28.419 49.875 20.349 19.417-8.066 28.669-30.259 20.791-49.693l-9.171 3.807z"
        fill="#fff"
      />
    </svg>
    </div>
      </IonCard>
    </div>
  )
}


