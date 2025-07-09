'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface ContactFormProps {
  submitText: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm({ submitText }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // 30秒内只能提交一次
  const canSubmit = () => {
    const now = Date.now();
    const timeDiff = now - lastSubmitTime;
    return timeDiff > 30000; // 30秒
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 检查提交频率限制
    if (!canSubmit()) {
      toast.error('Please wait for a moment before resubmitting.');
      return;
    }

    // 基本验证
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in the form.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 准备发送的数据
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '-',
        message: formData.message,
        submit_time: new Date().toLocaleString('zh-CN')
      };

      // 发送邮件
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success('The message has been successfully sent. I will reply to you soon.');
      
      // 重置表单
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // 记录提交时间
      setLastSubmitTime(Date.now());
      
    } catch (error) {
      console.error('Message submission failed:', error);
      toast.error('Message submission failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* 姓名 */}
      <div>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Full name"
          className="w-full h-12"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      {/* 邮箱 */}
      <div>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full h-12"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </div>

      {/* 手机号 */}
      <div>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone number (Optional)"
          className="w-full h-12"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
      </div>

      {/* 留言 */}
      <div>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Message"
          className="w-full"
          style={{ minHeight: '120px', height: 'auto'}}
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
        />
      </div>

      {/* 提交按钮 */}
      <div className="flex justify-start">
        <Button
          type="submit"
          disabled={isSubmitting || !canSubmit()}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-md transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : submitText}
        </Button>
      </div>
    </form>
  );
}