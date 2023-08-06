<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BackendMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->guard('admin')->check()) {
            return new Response('Not Found', 404);
        }

        $format = $request->format();

        switch ($format) {
            case 'html':
                return response(view('backend.layouts.master'));
            case 'json':
                return $next($request);
            default:
                return new Response('Not Found', 404);
        }
    }
}
