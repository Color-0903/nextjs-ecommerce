import Notification, { NotificationType } from '../common/notification';
import { ErrorMessage } from './error.message';

export function CustomHandleError(error: any) {
  if (error.statusCode === 404) {
    Notification(ErrorMessage[404], NotificationType.ERROR);
  } else if (error.statusCode === 403) {
    Notification(ErrorMessage[403], NotificationType.ERROR);
  } else if (error.statusCode === 401) {
    Notification(ErrorMessage[401], NotificationType.ERROR);
  }else if (error.statusCode === 409) {
    Notification(ErrorMessage[409], NotificationType.ERROR);
  } else {
    const errorMessage = (error.message || '').replace(/\s/g, '_').toUpperCase();
    if (errorMessage) {
      Notification(ErrorMessage[error.message], NotificationType.ERROR);
    } else {
      Notification(ErrorMessage[500], NotificationType.ERROR);
    }
  }
}
