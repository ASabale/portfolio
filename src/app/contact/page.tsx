import React from "react";
import { 
  Heading, 
  Text, 
  Button,
  Card, 
  Column, 
  Row, 
  Flex, 
  RevealFx
} from "@/once-ui/components";
import { contact } from "@/app/resources/content";
import { baseURL } from "@/app/resources";
import { ContactForm } from "@/components/contact/ContactForm";

export async function generateMetadata() {
  return {
    title: contact.title,
    description: contact.description,
    openGraph: {
      title: contact.title,
      description: contact.description,
      type: "website",
      url: `https://${baseURL}/contact`,
    },
  };
}

export default function ContactPage() {
  return (
    <Column maxWidth="l" gap="xl" horizontal="center">
      <Column maxWidth="m" gap="m" horizontal="center">
        <RevealFx translateY="4">
          <Heading variant="display-strong-l" align="center">
            {contact.title}
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2}>
          <Text variant="heading-default-xl" onBackground="neutral-weak" align="center">
            {contact.description}
          </Text>
        </RevealFx>
      </Column>

      {/* Mission Section */}
      {contact.mission?.display && (
        <RevealFx translateY="12" delay={0.3}>
          <Card 
            padding="l" 
            background="brand-weak" 
            border="brand-medium" 
            radius="m-4" 
            shadow="l"
            fillWidth
            maxWidth="m"
          >
            <Column gap="m" horizontal="center">
              <Heading variant="heading-strong-l" align="center">
                {contact.mission.title}
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-medium" align="center">
                {contact.mission.description}
              </Text>
            </Column>
          </Card>
        </RevealFx>
      )}

      <Row gap="xl" mobileDirection="column" fillWidth>
        {/* Message Form */}
        <Column flex={1} gap="l">
          <RevealFx translateY="12" delay={0.4}>
            <Card padding="l" background="surface" border="neutral-medium" radius="m-4" shadow="l">
              <Column gap="m">
                <Column gap="s">
                  <Heading variant="heading-strong-m">
                    {contact.messageForm.title}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {contact.messageForm.description}
                  </Text>
                </Column>

                <ContactForm />
              </Column>
            </Card>
          </RevealFx>
        </Column>

        {/* Meeting Scheduler & Contact Info */}
        <Column flex={1} gap="l">
          {/* Meeting Scheduler */}
          <RevealFx translateY="12" delay={0.6}>
            <Card padding="l" background="surface" border="neutral-medium" radius="m-4" shadow="l">
              <Column gap="m">
                <Column gap="s">
                  <Heading variant="heading-strong-m">
                    {contact.meetingScheduler.title}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {contact.meetingScheduler.description}
                  </Text>
                </Column>

                <Button
                  href={contact.meetingScheduler.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="m"
                  fillWidth
                  prefixIcon="calendar"
                >
                  Schedule Meeting
                </Button>
              </Column>
            </Card>
          </RevealFx>

          {/* Contact Information */}
          <RevealFx translateY="12" delay={0.8}>
            <Card padding="l" background="surface" border="neutral-medium" radius="m-4" shadow="l">
              <Column gap="m">
                <Column gap="s">
                  <Heading variant="heading-strong-m">
                    Contact Information
                  </Heading>
                </Column>

                <Column gap="s">
                  <Flex gap="s" vertical="center">
                    <Text variant="body-strong-s">Email:</Text>
                    <Button
                      href={`mailto:${contact.contactInfo.email}`}
                      variant="tertiary"
                      size="s"
                    >
                      {contact.contactInfo.email}
                    </Button>
                  </Flex>

                  <Flex gap="s" vertical="center">
                    <Text variant="body-strong-s">Location:</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {contact.contactInfo.location}
                    </Text>
                  </Flex>

                  <Flex gap="s" vertical="center">
                    <Text variant="body-strong-s">Availability:</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {contact.contactInfo.availability}
                    </Text>
                  </Flex>
                </Column>
              </Column>
            </Card>
          </RevealFx>
        </Column>
      </Row>
    </Column>
  );
}
