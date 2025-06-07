"use client"; // Mark this component as a client component

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SocialMediaForm = () => {
  // State for social media URLs
  const [socialMedia, setSocialMedia] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    youtube: "",
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Social Media URLs:", socialMedia);
    // Add your form submission logic here (e.g., API call)
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialMedia({ ...socialMedia, [name]: value });
  };

  return (
    <div className="min-h-screen bg-card py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl lg:text-2xl font-bold text-default-900 mb-8">
          Add Social Media Profiles
        </h1>

        <form
          className="bg-background shadow rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          {/* Facebook */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-default-700 mb-2">
              Facebook
            </label>
            <Input
              type="url"
              name="facebook"
              value={socialMedia.facebook}
              onChange={handleInputChange}
              placeholder="https://www.facebook.com/yourprofile"
            />
          </div>

          {/* Twitter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-default-700 mb-2">
              Twitter
            </label>
            <Input
              type="url"
              name="twitter"
              value={socialMedia.twitter}
              onChange={handleInputChange}
              placeholder="https://www.twitter.com/yourprofile"
            />
          </div>

          {/* LinkedIn */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-default-700 mb-2">
              LinkedIn
            </label>
            <Input
              type="url"
              name="linkedin"
              value={socialMedia.linkedin}
              onChange={handleInputChange}
              placeholder="https://www.linkedin.com/in/yourprofile"
            />
          </div>

          {/* Instagram */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-default-700 mb-2">
              Instagram
            </label>
            <Input
              type="url"
              name="instagram"
              value={socialMedia.instagram}
              onChange={handleInputChange}
              placeholder="https://www.instagram.com/yourprofile"
            />
          </div>

          {/* YouTube */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-default-700 mb-2">
              YouTube
            </label>
            <Input
              type="url"
              name="youtube"
              value={socialMedia.youtube}
              onChange={handleInputChange}
              placeholder="https://www.youtube.com/yourchannel"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              color="primary"
              className="bg-primary-700     "
            >
              Save Profiles
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SocialMediaForm;
