import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'VideoFan',
      avatar: 'VF',
      time: '1 час назад',
      text: 'Отличное видео! Очень познавательно',
      likes: 24
    },
    {
      id: 2,
      author: 'Viewer123',
      avatar: 'V1',
      time: '2 часа назад',
      text: 'Спасибо за контент, жду продолжения!',
      likes: 18
    }
  ]);
  const [newComment, setNewComment] = useState('');

  const categories = [
    {
      id: 'cooking',
      name: 'Кулинария',
      color: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      icon: 'ChefHat'
    },
    {
      id: 'kids',
      name: 'Для девочек',
      color: 'bg-gradient-to-r from-pink-400 to-purple-500',
      icon: 'Heart'
    },
    {
      id: 'learning',
      name: 'Обучение',
      color: 'bg-gradient-to-r from-green-400 to-emerald-500',
      icon: 'BookOpen'
    },
    {
      id: 'strategy',
      name: 'Стратегии',
      color: 'bg-gradient-to-r from-orange-400 to-red-500',
      icon: 'Target'
    },
    {
      id: 'sports',
      name: 'Спорт',
      color: 'bg-gradient-to-r from-blue-400 to-indigo-500',
      icon: 'Trophy'
    },
    {
      id: 'multiplayer',
      name: 'Мультиплеер',
      color: 'bg-gradient-to-r from-red-400 to-pink-500',
      icon: 'Users'
    },
    {
      id: 'horror',
      name: 'Ужасы',
      color: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      icon: 'Skull'
    },
    {
      id: 'management',
      name: 'Менеджмент',
      color: 'bg-gradient-to-r from-teal-400 to-cyan-500',
      icon: 'Building'
    },
    {
      id: 'strategy2',
      name: 'Стратегии и тактика',
      color: 'bg-gradient-to-r from-green-500 to-teal-500',
      icon: 'Zap'
    },
    {
      id: 'survival',
      name: 'Выживание',
      color: 'bg-gradient-to-r from-yellow-400 to-orange-500',
      icon: 'Mountain'
    },
    {
      id: 'racing',
      name: 'Гоночные и автомобили',
      color: 'bg-gradient-to-r from-blue-500 to-purple-600',
      icon: 'Car'
    },
    {
      id: 'logic',
      name: 'Логические и головоломки',
      color: 'bg-gradient-to-r from-indigo-400 to-purple-500',
      icon: 'Puzzle'
    }
  ];

  const videos = {
    cooking: [
      {
        id: 1,
        title: '5 секретов идеальных блинов',
        channel: 'CookingMaster',
        views: '1.2M',
        time: '2 дня назад',
        thumbnail: '/img/d00abaad-fce8-4ebc-88ce-b54341a453c2.jpg',
        duration: '12:34'
      },
      {
        id: 2,
        title: 'Домашняя паста за 15 минут',
        channel: 'QuickCook',
        views: '856K',
        time: '1 день назад',
        thumbnail: '/img/d00abaad-fce8-4ebc-88ce-b54341a453c2.jpg',
        duration: '15:20'
      },
      {
        id: 3,
        title: 'Торт без выпечки',
        channel: 'SweetTreats',
        views: '2.1M',
        time: '3 дня назад',
        thumbnail: '/img/d00abaad-fce8-4ebc-88ce-b54341a453c2.jpg',
        duration: '8:45'
      },
      {
        id: 4,
        title: 'Завтрак за 5 минут',
        channel: 'MorningCook',
        views: '534K',
        time: '4 дня назад',
        thumbnail: '/img/d00abaad-fce8-4ebc-88ce-b54341a453c2.jpg',
        duration: '6:12'
      }
    ],
    learning: [
      {
        id: 5,
        title: 'React с нуля за 1 час',
        channel: 'CodeAcademy',
        views: '3.2M',
        time: '1 неделю назад',
        thumbnail: '/img/5d5e3f12-1bd7-4c6c-b100-f3d440cef6bf.jpg',
        duration: '58:12'
      },
      {
        id: 6,
        title: 'Английский за 30 дней',
        channel: 'LangMaster',
        views: '1.8M',
        time: '3 дня назад',
        thumbnail: '/img/5d5e3f12-1bd7-4c6c-b100-f3d440cef6bf.jpg',
        duration: '45:30'
      },
      {
        id: 7,
        title: 'Математика просто',
        channel: 'MathEasy',
        views: '967K',
        time: '2 дня назад',
        thumbnail: '/img/5d5e3f12-1bd7-4c6c-b100-f3d440cef6bf.jpg',
        duration: '32:18'
      }
    ],
    sports: [
      {
        id: 8,
        title: 'Топ голы 2024',
        channel: 'SportHighlights',
        views: '5.1M',
        time: '1 день назад',
        thumbnail: '/img/d782f529-7424-4aec-9c87-214a38b1ba49.jpg',
        duration: '25:40'
      },
      {
        id: 9,
        title: 'Тренировка дома',
        channel: 'FitLife',
        views: '1.3M',
        time: '2 дня назад',
        thumbnail: '/img/d782f529-7424-4aec-9c87-214a38b1ba49.jpg',
        duration: '42:15'
      }
    ]
  };

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

  const CategorySection = ({ category, videos: categoryVideos }) => (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <div className={`${category.color} rounded-lg p-4 mr-4 min-w-[200px] flex items-center justify-between text-white`}>
          <div>
            <Icon name={category.icon} size={24} className="mb-2" />
            <h2 className="text-lg font-bold">{category.name}</h2>
            <p className="text-sm opacity-90">{categoryVideos?.length || 0} видео</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="ml-auto">
          Показать все
          <Icon name="ChevronRight" size={16} className="ml-1" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categoryVideos?.slice(0, 4).map((video) => (
          <Card 
            key={video.id} 
            className="group hover:shadow-lg transition-all duration-200 cursor-pointer" 
            onClick={() => setSelectedVideo(video)}
          >
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full aspect-video object-cover rounded-t-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-xs mb-1">{video.channel}</p>
                <p className="text-muted-foreground text-xs">{video.views} • {video.time}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const VideoPlayer = ({ video }) => (
    <div className="max-w-4xl mx-auto">
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

      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-3">{video.title}</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>{video.channel.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{video.channel}</p>
              <p className="text-sm text-muted-foreground">850K подписчиков</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Подписаться
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="ThumbsUp" size={16} />
              1.2K
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Share2" size={16} />
              Поделиться
            </Button>
          </div>
        </div>
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-2 mb-2">
              <Badge variant="secondary">{video.views} просмотров</Badge>
              <Badge variant="secondary">{video.time}</Badge>
            </div>
            <p className="text-sm">Увлекательное и познавательное видео от наших создателей контента.</p>
          </CardContent>
        </Card>
      </div>

      {/* Comments */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Комментарии ({comments.length})</h3>
        
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
                    Ответить
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Play" size={18} className="text-white ml-0.5" />
                </div>
                <span className="font-bold text-xl text-primary">VideoHub</span>
              </div>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex">
                <Input 
                  placeholder="Поиск видео по категориям..." 
                  className="rounded-r-none border-r-0"
                />
                <Button variant="outline" className="rounded-l-none border-l-0 px-6 bg-primary text-white border-primary hover:bg-primary/90">
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
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {selectedVideo ? (
          <div>
            <Button 
              variant="ghost" 
              className="mb-4" 
              onClick={() => setSelectedVideo(null)}
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад к категориям
            </Button>
            <VideoPlayer video={selectedVideo} />
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-8 text-center">Видео по категориям</h1>
            
            {categories.map((category) => (
              <CategorySection 
                key={category.id}
                category={category}
                videos={videos[category.id] || []}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;