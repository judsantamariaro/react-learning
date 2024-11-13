import PropTypes from "prop-types";
import { useState } from "react";
// import React from "react";

const TwitterFollowCard = ({
  children,
  formatUserName,
  userName,
  initialIsFollowing,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://media.licdn.com/dms/image/v2/D4E35AQE6WcWdueLVKg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1730009510206?e=1732078800&v=beta&t=OQNX34E5rKyMVFuJXpQ8e7hKv_I-lWPiCWFYJA5qS9M"
          alt="avatar twitterFollowCard"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
};

TwitterFollowCard.propTypes = {
  formatUserName: PropTypes.func,
  userName: PropTypes.string,
  children: PropTypes.string,
  initialIsFollowing: PropTypes.bool,
};

export default TwitterFollowCard;
