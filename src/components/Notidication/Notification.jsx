import css from './Notification.module.css'

const Notification = ({ message }) => {
  return <p className={css.boxNotifi}>{message}</p>;
};

export default Notification;
