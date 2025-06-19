// components/modals/ContactModalWrapper.tsx
import { sendEmail } from '@/app/actions/send-email';
import ContactForm from './modal-contact-us';

export default function ContactModalWrapper() {
  return <ContactForm action={sendEmail} />;
}
