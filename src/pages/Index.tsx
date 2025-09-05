import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'TechGuru',
      avatar: 'TG',
      time: '2 часа назад',
      text: 'Отличное объяснение! Спасибо за подробный разбор',
      likes: 12
    },
    {
      id: 2,
      author: 'CodeMaster',
      avatar: 'CM',
      time: '1 час назад',
      text: 'Можете сделать продолжение по этой теме?',
      likes: 8
    },
    {
      id: 3,
      author: 'WebDev',
      avatar: 'WD',
      time: '30 минут назад',
      text: 'Очень полезная информация, добавил в избранное!',
      likes: 15
    }
  ]);
  const [newComment, setNewComment] = useState('');

  const videos = [
    {
      id: 1,
      title: 'Изучаем React за 30 минут',
      channel: 'CodeChannel',
      views: '2.1M просмотров',
      time: '3 дня назад',
      thumbnail: '/img/5d5e3f12-1bd7-4c6c-b100-f3d440cef6bf.jpg',
      duration: '30:45',
      description: 'Полное руководство по React для начинающих разработчиков'
    },
    {
      id: 2,
      title: 'Секреты приготовления идеальной пасты',
      channel: 'CookingPro',
      views: '856K просмотров',
      time: '1 день назад',
      thumbnail: '/img/d00abaad-fce8-4ebc-88ce-b54341a453c2.jpg',
      duration: '15:20',
      description: 'Профессиональные советы от шеф-повара'
    },
    {
      id: 3,
      title: 'Путешествие по горам Кавказа',
      channel: 'TravelVlog',
      views: '423K просмотров',
      time: '2 дня назад',
      thumbnail: '/img/d782f529-7424-4aec-9c87-214a38b1ba49.jpg',
      duration: '22:15',
      description: 'Удивительные пейзажи и незабываемые моменты'
    }
  ];

  const navigationItems = [
    { icon: 'Home', label: 'Главная', active: true },
    { icon: 'Play', label: 'Видео' },
    { icon: 'UserCheck', label: 'Подписки' },
    { icon: 'Users', label: 'Каналы' },
    { icon: 'User', label: 'Профиль' },
    { icon: 'Search', label: 'Поиск' },
    { icon: 'Heart', label: 'Избранное' },
    { icon: 'List', label: 'Плейлисты' }
  ];

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'Вы',
        avatar: 'ВЫ',
        time: 'только что',
        text: newComment,
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const VideoPlayer = ({ video }) => (
    <div className="bg-black rounded-lg overflow-hidden mb-6">
      <div className="aspect-video relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button size="lg" className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur">
            <Icon name="Play" size={24} className="text-white ml-1" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
          {video.duration}
        </div>
      </div>
    </div>
  );

  const VideoCard = ({ video, onClick }) => (
    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer" onClick={() => onClick(video)}>
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full aspect-video object-cover rounded-t-lg"
          />
          <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
            {video.duration}
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-primary">
            {video.title}
          </h3>
          <p className="text-muted-foreground text-xs mb-1">{video.channel}</p>
          <p className="text-muted-foreground text-xs">{video.views} • {video.time}</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background dark:bg-youtube-dark">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Icon name="Menu" size={20} />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Icon name="Play" size={16} className="text-primary-foreground ml-0.5" />
            </div>
            <span className="font-bold text-lg">VideoBlog</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex">
            <Input 
              placeholder="Поиск видео..." 
              className="rounded-r-none border-r-0 focus:ring-0 focus:border-border"
            />
            <Button variant="outline" className="rounded-l-none border-l-0 px-6">
              <Icon name="Search" size={18} />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Icon name="Bell" size={20} />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarFallback>ПК</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 border-r bg-background/50 backdrop-blur min-h-[calc(100vh-57px)] p-2`}>
          <nav className="space-y-1">
            {navigationItems.map((item, index) => (
              <div key={index}>
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 ${sidebarOpen ? 'px-3' : 'px-2 justify-center'}`}
                >
                  <Icon name={item.icon} size={20} />
                  {sidebarOpen && <span>{item.label}</span>}
                </Button>
                {index === 2 && <Separator className="my-2" />}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {selectedVideo ? (
            <div className="max-w-7xl mx-auto p-6">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Video Player */}
                <div className="xl:col-span-2">
                  <VideoPlayer video={selectedVideo} />
                  
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">{selectedVideo.title}</h1>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>{selectedVideo.channel.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{selectedVideo.channel}</p>
                          <p className="text-sm text-muted-foreground">1.2M подписчиков</p>
                        </div>
                        <Button className="ml-4">Подписаться</Button>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Icon name="ThumbsUp" size={16} />
                          2.1K
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Icon name="Share2" size={16} />
                          Поделиться
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Download" size={16} />
                        </Button>
                      </div>
                    </div>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex gap-2 mb-2">
                          <Badge variant="secondary">{selectedVideo.views}</Badge>
                          <Badge variant="secondary">{selectedVideo.time}</Badge>
                        </div>
                        <p className="text-sm">{selectedVideo.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Comments Section */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Комментарии ({comments.length})</h3>
                    
                    {/* Add Comment */}
                    <div className="flex gap-3 mb-6">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>ВЫ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Input
                          placeholder="Добавьте комментарий..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="mb-2"
                        />
                        {newComment && (
                          <div className="flex gap-2">
                            <Button size="sm" onClick={addComment}>Отправить</Button>
                            <Button size="sm" variant="ghost" onClick={() => setNewComment('')}>
                              Отмена
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-4">
                      {comments.map((comment) => (
                        <div key={comment.id} className="flex gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>{comment.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-sm">{comment.author}</span>
                              <span className="text-xs text-muted-foreground">{comment.time}</span>
                            </div>
                            <p className="text-sm mb-2">{comment.text}</p>
                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm" className="h-6 text-xs gap-1">
                                <Icon name="ThumbsUp" size={14} />
                                {comment.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="h-6 text-xs">
                                <Icon name="ThumbsDown" size={14} />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-6 text-xs">
                                Ответить
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recommended Videos */}
                <div className="space-y-3">
                  <h3 className="font-semibold">Рекомендуемые</h3>
                  {videos.filter(v => v.id !== selectedVideo.id).map((video) => (
                    <div key={video.id} className="flex gap-2 cursor-pointer group" onClick={() => setSelectedVideo(video)}>
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-40 aspect-video object-cover rounded"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white px-1 py-0.5 rounded text-xs">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary">
                          {video.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{video.channel}</p>
                        <p className="text-xs text-muted-foreground">{video.views}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {videos.map((video) => (
                    <VideoCard 
                      key={video.id} 
                      video={video} 
                      onClick={setSelectedVideo}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;