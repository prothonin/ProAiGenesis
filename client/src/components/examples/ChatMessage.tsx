import ChatMessage from '../ChatMessage';

export default function ChatMessageExample() {
  return (
    <div className="bg-background p-8 space-y-4">
      <ChatMessage 
        role="user" 
        content="Hello ProAi! Can you help me build a web application?"
        timestamp={new Date()}
      />
      <ChatMessage 
        role="assistant" 
        content="Absolutely! I'd be happy to help you build a web application. I was built by Prothon and I can assist you with everything from planning to implementation. What kind of application would you like to create?"
        timestamp={new Date()}
      />
    </div>
  );
}
