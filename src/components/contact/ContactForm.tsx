"use client";

import React, { useState } from "react";
import { 
  Button, 
  Input, 
  Textarea, 
  Column, 
  Row, 
  useToast
} from "@/once-ui/components";

interface MessageFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<MessageFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        addToast({
          message: "Message sent successfully! I'll get back to you soon.",
          variant: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      addToast({
        message: "Failed to send message. Please try again or email me directly.",
        variant: "danger",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Column gap="m">
        <Row gap="m" mobileDirection="column">
          <Column flex={1}>
            <Input
              id="contact-name"
              label="Name"
              labelAsPlaceholder
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </Column>
          <Column flex={1}>
            <Input
              id="contact-email"
              label="Email"
              labelAsPlaceholder
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Column>
        </Row>

        <Input
          id="contact-subject"
          label="Subject"
          labelAsPlaceholder
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />

        <Textarea
          id="contact-message"
          label="Message"
          labelAsPlaceholder
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
        />

        <Button
          type="submit"
          variant="primary"
          size="m"
          disabled={isSubmitting}
          fillWidth
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </Column>
    </form>
  );
};

