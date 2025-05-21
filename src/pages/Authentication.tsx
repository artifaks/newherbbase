
import { useState } from "react";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Check, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { grantFreeEbook } from "@/utils/subscriptionUtils";

const Authentication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
        variant: "default",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message || "There was an error signing in",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });
      
      if (error) throw error;
      
      // Grant the free eBook after successful signup
      await grantFreeEbook();
      
      toast({
        title: "Account created!",
        description: "Check your email for the confirmation link. Your free eBook has been added to your account!",
        variant: "default",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message || "There was an error creating your account",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow flex items-center justify-center py-12 bg-herbal-50 herb-pattern-bg">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-herbal-800 mb-6">
              Unlock the Full Power of Herbal Wisdom
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to HerbalBounty for just $4.99/month and gain access to our complete herb database, 
              premium ebooks, and exclusive member features.
            </p>

            <div className="bg-white rounded-lg border border-herbal-100 p-6 mb-8">
              <h2 className="text-xl font-semibold text-herbal-700 mb-4 flex items-center">
                <Leaf className="mr-2 h-5 w-5" />
                Membership Benefits
              </h2>
              <ul className="space-y-3">
                {[
                  "Full access to 100+ detailed herb profiles",
                  "Premium ebook collection (regularly updated)",
                  "Save your favorite herbs for quick reference",
                  "Detailed preparation instructions and dosage guidelines",
                  "Ad-free browsing experience",
                  "Cancel anytime"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-herbal-600 mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-amber-50 rounded-lg border border-amber-200 p-6">
              <h2 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Special Offer: Free eBook!
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <img
                  src="https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//ashwagandha.jpg"
                  alt="Free eBook: Herbal Medicine Basics"
                  className="w-32 h-40 object-cover rounded-md shadow-md"
                />
                <div>
                  <h3 className="text-lg font-medium text-amber-700">Herbal Medicine Basics</h3>
                  <p className="text-sm text-amber-700 mb-2">By Dr. Sophia Green</p>
                  <p className="text-amber-600">
                    Sign up today and receive our popular starter guide to herbal medicine completely 
                    FREE! Learn the foundations of herbal healing with this comprehensive guide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <Card>
                  <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                      Enter your credentials to access your HerbalBounty account.
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSignIn}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input 
                          id="password" 
                          type="password" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required 
                        />
                      </div>
                      <div className="text-sm text-right">
                        <a href="#" className="text-herbal-600 hover:text-herbal-700">
                          Forgot password?
                        </a>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        type="submit" 
                        className="w-full bg-herbal-600 hover:bg-herbal-700"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              
              <TabsContent value="signup">
                <Card>
                  <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>
                      Create your HerbalBounty account, get your free eBook, and start your subscription.
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSignUp}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          type="text" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email</Label>
                        <Input 
                          id="signup-email" 
                          type="email" 
                          placeholder="your@email.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <Input 
                          id="signup-password" 
                          type="password" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input 
                          id="confirm-password" 
                          type="password" 
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required 
                        />
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-500">
                          By signing up, you agree to our Terms of Service and Privacy Policy.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        type="submit" 
                        className="w-full bg-herbal-600 hover:bg-herbal-700"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating account..." : "Subscribe for $4.99/month + Free eBook"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Secure payment processing by Stripe</p>
              <p className="mt-2">Your free eBook will be available immediately after registration</p>
              <p className="mt-1">Your subscription will renew automatically each month. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Authentication;
