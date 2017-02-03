<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>@yield('title')</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </head>
    <body>
		@include('includes.header')
        <div class="container">
        	@yield('content')
        </div>

        {{-- <link rel="stylesheet" href="{{ URL::to('css/main.css') }}"> --}}
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
        <script src="{{ asset('js/main.js') }}"></script>
    </body>
</html>