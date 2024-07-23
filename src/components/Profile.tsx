import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonToolbar,
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/core/components";
import { useRef, useState } from "react";
import { closeOutline } from "ionicons/icons";
import './Profile.css';  

interface ProfileProps {
  avatar?: string;
  name: string;
  title: string;
  description: string;
  biography: string;
  socials: { name: string; link: string }[];
}

const Profile = ({
  avatar,
  name,
  title,
  description,
  socials,
  biography,
}: ProfileProps) => {
  const icons = {
    linkedin:
      "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
    twitter:
      "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
  };

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    "This modal example uses triggers to automatically open a modal when the button is clicked."
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === "confirm") {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <div className="profile-container">
      <IonCard
        style={{background: "#FFDBBB"}}
        button
        id={`open-modal${name.substring(0, 2)}`}
        className="profile-card"
      >
        <IonCardContent>
          <div className="profile-content">
            <img
              className="profile-avatar"
              src={avatar ?? "/avatars/placeholder.gif"}
            />
            <span className="profile-name">{name}</span>
            <span className="profile-title">{title}</span>
          </div>
        </IonCardContent>
        <div className="profile-socials">
          {socials.map(
            (social) =>
              social.link !== "#" && (
                <a
                  key={social.name}
                  className="profile-social-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(social.link);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="profile-social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={icons[social.name as keyof typeof icons]} />
                  </svg>
                </a>
              )
          )}
        </div>
      </IonCard>
      <IonModal
        ref={modal}
        trigger={`open-modal${name.substring(0, 2)}`}
        onWillDismiss={(ev) => onWillDismiss(ev)}
      >
        <IonContent className="ion-padding" style={{ width: "102.5%" }}>
          <button
            onClick={() => modal.current?.dismiss()}
            style={{
              width: "fit-content",
              position: "absolute",
              top: "2%",
              right: "3.5%",
            }}
          >
            <IonIcon icon={closeOutline} />
          </button>
          <h2 className="modal-name">{name}</h2>
          <h4 className="modal-title">{title}</h4>
          <div className="modal-socials">
            {socials.map(
              (social) =>
                social.link !== "#" && (
                  <a
                    key={social.name}
                    className="modal-social-link"
                    href={social.link}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="modal-social-icon"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={icons[social.name as keyof typeof icons]} />
                    </svg>
                  </a>
                )
            )}
          </div>
          <div
            style={{
              height: 20,
            }}
          />
          <IonAvatar
            style={{
              width: 200,
              height: 200,
              margin: "auto",
            }}
          >
            <img
              src={avatar}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </IonAvatar>
          <p className="modal-biography">{biography}</p>
        </IonContent>
      </IonModal>
    </div>
  );
};

export default Profile;
