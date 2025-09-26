export default function Login() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue shopping
          </p>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <p className="text-muted-foreground">
            OTP Authentication coming in Phase 3...
          </p>
        </div>
      </div>
    </div>
  );
}